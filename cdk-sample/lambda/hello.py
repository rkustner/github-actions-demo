
def handler(event, context):
    message = '<h1>Hello There!</h1>'  

    return {
        "statusCode": 200,
        "headers": { "Content-type": "text/html"} ,
        "body": html
    }
