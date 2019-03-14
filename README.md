# node-demo
一个小型的node-demo编写
1.安装json-server  npm install -S json-server
2.新建一个 JSON 文件data.json
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
3.npm init -y，生成一个package.json文件，并进行修改，
 "scripts": {

    "server": "json-server data.json",

    "test": "..."

  },
  4.npm run server来启动服务
  
