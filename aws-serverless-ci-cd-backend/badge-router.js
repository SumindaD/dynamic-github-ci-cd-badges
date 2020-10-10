exports.handler = async (event) => {

    console.log(event);

    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('https://dev-475190109047-codepipeline-s3bucket.s3-us-west-2.amazonaws.com/badges/main-Build-passing-green.svg'),
    };
    return response;
};
