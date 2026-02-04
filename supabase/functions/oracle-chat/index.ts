import "jsr:@supabase/functions-js/edge-runtime.d.ts";


declare const Deno: any;

const OPENROUTER_API_KEY = Deno.env.get("OPENROUTER_API_KEY");
const SYSTEM_PROMPT = `
You are The Echo, an AI assistant for Team Echo - a premier Virtual Assistant and Virtual Agent recruiting agency.

ABOUT TEAM ECHO:
- We connect businesses with pre-vetted, skilled Virtual Assistants and Virtual Agents
- We specialize in remote workforce solutions across all industries
- Our talent pool includes admin VAs, sales agents, customer support specialists, and campaign specialists

SERVICES WE OFFER:
1. Virtual Assistants (VAs): Email management, scheduling, data entry, research, bookkeeping
2. Virtual Agents: Sales support, lead generation, customer service, appointment setting
3. Campaign Specialists: Marketing support, social media management, outreach campaigns

INDUSTRIES WE SERVE:
E-commerce, Real Estate, Healthcare, Tech Startups, Marketing Agencies, Legal, Finance

YOUR ROLE:
- Answer questions about our VA services professionally and warmly
- Explain hiring models (full-time, part-time, project-based)
- Describe our vetting process and quality guarantees
- Guide users to the contact form when they're ready to hire
- Be helpful, concise, and knowledgeable about remote work best practices

TONE: Professional yet approachable. Confident and helpful. Never oversell - focus on understanding client needs.
`;

Deno.serve(async (req: Request) => {
    // Allowed origins (add your production domain here)
    const allowedOrigins = [
        'http://localhost:5173',
        'http://localhost:4173',
        'http://127.0.0.1:5173',
        'https://team-echo.com',
        'https://www.team-echo.com',
        // Add your deployment domain here when ready
    ];

    const origin = req.headers.get('origin') || '';
    const isAllowedOrigin = allowedOrigins.some(allowed => origin.startsWith(allowed));

    // CORS Headers with origin validation
    const corsHeaders = {
        'Access-Control-Allow-Origin': isAllowedOrigin ? origin : allowedOrigins[0],
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    };

    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders });
    }

    // Block requests from unauthorized origins
    if (!isAllowedOrigin) {
        return new Response(
            JSON.stringify({ error: 'Unauthorized origin' }),
            { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }

    try {
        // Validate API key
        if (!OPENROUTER_API_KEY) {
            throw new Error("OPENROUTER_API_KEY not configured");
        }

        const { messages } = await req.json();

        // Validate messages
        if (!Array.isArray(messages) || messages.length === 0) {
            return new Response(
                JSON.stringify({ error: "Invalid messages format" }),
                { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
        }

        // Prepare request to OpenRouter
        const chatReq = {
            model: "arcee-ai/trinity-large-preview:free",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                ...messages
            ],
            stream: true
        };

        const openRouterRes = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
                "Content-Type": "application/json",
                "HTTP-Referer": "https://team-echo.com", // Optional components
                "X-Title": "Team Echo Oracle",
            },
            body: JSON.stringify(chatReq)
        });

        if (!openRouterRes.ok) {
            throw new Error(`OpenRouter Error: ${openRouterRes.statusText}`);
        }

        // Proxy the stream back
        return new Response(openRouterRes.body, {
            headers: {
                ...corsHeaders,
                'Content-Type': 'text/event-stream',
            },
        });

    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
    }
});
