exports.handler = async(event)=>{
    var response={
        statusCode:404,
        body:JSON.stringify({
            Error:"No Routes"
        }),
    };
    if(event.path=="/api/getproduct") {
        response = {
            statusCode:200,
            body:JSON.stringify({
                ProductName:"Shoes",
                Price:"1005",
            }),
        };
    }
    if(event.path=="/api/getuser"){
        response={
            statusCode:200,
            body:JSON.stringify({
                UserName:"Sivaram",
                Email:"sivaram@gmail.com",
            }),
        };
    }
    return response;
};