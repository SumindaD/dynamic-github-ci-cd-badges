exports.handler = async (event, context, callback) => {

    console.log(event);

    const response = {
        statusCode: 301,
        headers: {
            Location: 'https://dev-475190109047-codepipeline-s3bucket.s3-us-west-2.amazonaws.com/badges/main-Build-passing-green.svg'
        }
    };
    
    return response;
};
