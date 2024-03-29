# Play ground Gulp!

## install

```shell
git clone https://github.com/Hansanghyeon/playground-gulp.git
```

1. 프로젝트이름을 알아볼수있는 짧은 이름으로 폴더이름 변경
2. `cd 프로젝트/Gulp`
3. `sudo npm i`
4. .env 셋팅
    ```env
   # PROEJCT 정보
    PROJECT=프로젝트명
    
    # OPTION(*)
    # webpack
    # S3 upload
    # Slack
    OPTION_WEBPACK=boolean
    OPTION_S3=boolean
    OPTION_SLACK=boolean
      ## Sate notice
      AWS_S3_STATE_FOR_SLACK=boolean
    
    # Skill Stack
    ## OPTION_WEBPACK = true ? 'javascript, typescript' : null
    STACK_SCRIPT_TYPE=javascript
    
    # OPTION_S3 = true ? data fill : Skip
    ## AWS S3
    AWS_S3_BUCKET_NAME=
    AWS_S3_BUCKET_ACCESSKEYID=
    AWS_S3_BUCKET_SECRETACCESSKEY=
    AWS_S3_URL=
    
    # OPTION_SLACK = true ? data fill : Skip
    ## NOTIOCE
    SLACK_MESSAGE=boolean
    SLACK_UPLOAD=boolean
      # SLACK_MESSAGE = true || SLACK_UPLOAD = true ? data fill : Skip
      SLACK_API_GULPBOT=
      SLACK_WEBHOOK=
      #webhook push channel
      SLACK_CHANNEL=
    
    # CDN_URL 웹훅 유저 프로필 아이콘제공
    CDN_URL=https://cdn.4log.dev/
    ```
5. 실제작업할 곳 셋팅
    프로젝트 루트경로에 `.proejct-code` 디렉토리를 복사
    
    ```shell
    cp -r .project-code PROJECT-code
    ```
    
    사용할 `프로젝트 이름-code`로 변경해서 사용한다.

### 기본셋팅 패키지목록

- Gulp
- SASS : 스타일작업
- Babel : ES6, ES7 → ES5
- TypeScript
- Slack
- AWS S3
- Webpack

---

Folder 설명

#### .proejct-code

실제로 작업하는 곳 scss, js, ts ...

#### Gulp

손대지 않아도되는곳

#### public

S3 upload를 하지 않을시 여기서 최종결과물을 가져다 쓰면된다.