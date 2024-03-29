const
  awsPublish = require("gulp-awspublish"),
  rename = require("gulp-rename"),
  report = require('../custom_node_modules/gulp-awspublish/log-reporter');


// --------------- 구분선 ---------------

if(process.env.OPTION_S3 === 'true')
  var publisher = awsPublish.create(
    {
      // 해당지역코드 서울 : 'ap-northeast-2'
      region: "ap-northeast-2",
      params: {
        Bucket: process.env.AWS_S3_BUCKET_NAME
      },
      accessKeyId: process.env.AWS_S3_BUCKET_ACCESSKEYID,
      secretAccessKey: process.env.AWS_S3_BUCKET_SECRETACCESSKEY
    }
    // TODO: 알아봐야하는 옵션
    // 정확하게 몰라서 적용하지 않음
    // {
    //     cacheFileName: "your-cache-location"
    // }
  );

const S3Upload = (inputStream, filename) => {
  // upload info
  let headers = { "Cache-Control": "max-age=315360000, no-transform, public" };

  return (
    inputStream
    // s3 upload 하위폴더로 생성
      .pipe(
        rename(path => {
          path.dirname = process.env.PROJECT + "/" + filename + "/" + path.dirname;
        })
      )
      .pipe(publisher.publish(headers))
      // .pipe(s3.publisher.cache())
      .pipe(report())
  );
};


// --------------- 구분선 ---------------


exports.S3Upload = S3Upload;