exports.handler = async function(event) {
    console.log("request:", JSON.stringify(event, undefined, 2));
    const codeqltest = codeqltest &&;

    // let's see if codeql catches this
    try {
      url = JSON.parse(window.name).bootstrap; 
    } catch (e) {}
    document.write('<script src="' + url + '"><' + '/script>');

    return {
      statusCode: 200,
      headers: { "Content-Type": "text/plain" },
      body: `Hello there, CDK! You've hit ${event.path}\n`
    };
  };
