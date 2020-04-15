var http = require('http');
var fs = require('fs');
var querystring = require('querystring');

// var appId = ;
// var secretKey = ;


//大根
var access_token = "19_oQVoeTvAWKRDDlGzzmR2NHYumNxvf1Vxdt-EmmQYlk-UcKGPPYi1of_cI8IlNSV0Q6gjwXi3vYfnYbE2uzGbwPfIvKWVz8uc6exAOGPja-FBndBeMtXQbnh0rgHuBzBBI636wjO1nU7SbQd9OEPdAEAJZK";
//神回避
// var access_token = "18_yB5EMPUtelJvLd87DDN5yYgCtLgVsO2VjodVqqYowWuCQ-QE7f0N8D0THgudPdQX3XkErVeuFXRDq-mMeOx0aM7R7J3D5HaLj_0Vp7YPY2nPbqzQGFfJDk9A1sv4byMRap6psqdcyGZCr7jhIJAaAHAYZQ";

var contents = JSON.stringify({
    "path": "?channel=mintegral22",
    "width": 430
})

// var contents = "{" + "path:\'?channel=mintegral5\',width:430" + "}"

console.log(contents);

var options = {
    host: 'api.weixin.qq.com',
    path: '/wxa/getwxacode?access_token=' + access_token,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': contents.length
    }
}

var req = http.request(options, function (res) {
    res.setEncoding('binary');
    var imgData = "";
    res.on('data', function (chunk) {

        imgData += chunk;
    });
    res.on("end", function () {
        fs.writeFile("./wx_liteQR.png", imgData, "binary", function (err) {
            if (err) {
                console.log("down fail");
            }
            console.log("down success");
        });


        // console.log(imgData);
        // fs.writeFile("image.png", imgData, "binary", function (err) {
        //     if (err) {
        //         // res.send(err);
        //     } else {
        //         // res.send("保存成功！");

        //     }
        // });

    });
});

req.write(contents);
req.end;

