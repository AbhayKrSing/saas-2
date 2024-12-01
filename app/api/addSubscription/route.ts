import mailchimp from "@mailchimp/mailchimp_marketing";


mailchimp.setConfig({
  apiKey: process.env.MAIL_CHIMP_API_KEY,
  server: process.env.MAIL_CHIMP_API_SERVER,
});

export async function POST(req:Request) {
    const {email}=await req.json();
    if(!email) {
        new Response(JSON.stringify({error:'Email is Required'}))
    }
    try {
        const res=await mailchimp.lists.addListMember(
            process.env.MAIL_CHIMP_AUDIENCE_ID,
            {email_address:email}
        )
        return new Response(JSON.stringify({res}));

    } catch (error:any) {
        return new Response(JSON.stringify({error:JSON.parse(error.response.text)}))
    }
}
