<template>
  <div class="chatbox" style="height: 700px">
    <div class="chat_top fn-clear">
      <div class="uinfo fn-clear">
        <div class="uface">
          <img
            src="http://www.jq22.com/img/cs/500x300-1.png"
            width="40"
            height="40"
            alt=""
          />
        </div>
        <div class="uname">
          河图<i class="fontico down"></i>
          <ul class="managerbox">
            <li>
              <a href="#"><i class="fontico lock"></i>修改密码</a>
            </li>
            <li>
              <a href="#"><i class="fontico logout"></i>退出登录</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="chat_message fn-clear">
      <div class="chat_left">
        <div class="message_box" id="message_box">
          <div class="msg_item fn-clear">
            <div class="uface">
              <img
                href="http://www.jq22.com/img/cs/500x500-1.png"
                width="40"
                height="40"
                alt=""
              />
            </div>
            <div class="item_right">
              <div class="msg">
                近日，TIOBE发布了2014年9月的编程语言排行榜，Java、C++跌至历史最低点，前三名则没有变化，依旧是C、Java、Objective-C。
              </div>
              <div class="name_time">猫猫 ? 3分钟前</div>
            </div>
          </div>
        </div>
        <div class="write_box">
          <textarea
            id="message"
            name="message"
            class="write_area"
            placeholder="说点啥吧..."
          ></textarea>
          <input type="hidden" name="fromname" id="fromname" value="河图" />
          <input type="hidden" name="to_uid" id="to_uid" value="0" />
          <div class="facebox fn-clear">
            <div class="expression"></div>
            <div class="chat_type" id="chat_type">双击用户私聊</div>
            <button name="" class="sub_but">发送</button>
          </div>
        </div>
      </div>
      <div class="chat_right">
        <ul class="user_list" title="双击用户私聊">
          <li class="fn-clear" data-id="2">
            <span
              ><img
                src="http://www.jq22.com/img/cs/500x500-2.png"
                width="30"
                height="30"
                alt="" /></span
            ><em>猫猫</em>
          </li>
          <li class="fn-clear" data-id="3">
            <span
              ><img
                src="http://www.jq22.com/img/cs/500x500-3.png"
                width="30"
                height="30"
                alt="" /></span
            ><em>白猫</em>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Chat",
  data() {
    return {};
  },
};
</script>
<style lang="css" scoped>
.fn-clear:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}
.fn-hide {
  display: none;
}
.fn-left,
.fn-right {
  display: inline;
}
.fn-left {
  float: left;
}
.fn-right {
  float: right;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-button {
  display: none;
}
::-webkit-scrollbar-track,
::-webkit-scrollbar-track-piece {
  background: -webkit-gradient(linear, left);
}
::-webkit-scrollbar-thumb,
::-webkit-scrollbar-thumb:horizontal {
  border-radius: 6px;
  background: #bdbdbd;
}
::-webkit-scrollbar-thumb:hover {
  background: #8e8e8e;
}
::-webkit-scrollbar-thumb:active {
  background: #828181;
}
ul,li {
  list-style: none;
}
textarea {
    resize: none;
}
.fontico:before {
  font-family: "fontello";
  font-style: normal;
  font-weight: normal;
  display: inline-block;
  text-decoration: inherit;
  text-align: center;
}
i.down:before {
  content: "\e800";
}
i.lock:before {
  content: "\e806";
}
i.logout:before {
  content: "\e804";
}
/*chatbox*/
.chatbox {
  overflow: hidden;
  height: 100%;
  width: 800px;
  margin: 0 auto;
  min-width: 600px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 1);
}
/*chat_top*/
.chat_top {
  height: 60px;
  border-bottom: 1px solid #eee;
  background-size: cover;
}
.logo {
  float: left;
}
.logo img {
  vertical-align: bottom;
}
.uinfo {
  margin: 10px 0;
  float: right;
  padding-right: 20px;
}
.uface {
  float: left;
  height: 40px;
}
.uface img {
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
.uinfo .uname {
  float: left;
  line-height: 40px;
  margin-left: 10px;
  color: #2e4059;
  position: relative;
}
.uinfo .uname i.down {
  margin-left: 50px;
}
.managerbox {
  display: none;
  width: 100px;
  border: 1px solid #eee;
  background-color: #fff;
  padding: 10px 0;
  position: absolute;
  top: 40px;
  right: -10px;
}
.managerbox a {
  display: block;
  color: #2e4059;
  padding: 0px 10px;
}
.managerbox a i {
  margin-right: 10px;
}
.managerbox a:hover {
  background-color: #f9f9f9;
  text-decoration: none;
}
/*chat_message*/
.chat_message {
  height: -moz-calc(100% - 61px);
  height: -webkit-calc(100% - 61px);
  height: calc(100% - 61px);
}
/*chat_left*/
.chat_left {
  padding: 20px;
  width: -moz-calc(100% - 240px);
  width: -webkit-calc(100% - 240px);
  width: calc(100% - 240px);
  height: -moz-calc(100% - 40px);
  height: -webkit-calc(100% - 40px);
  height: calc(100% - 40px);
  float: left;
}
.message_box {
  background-color: #fff;
  margin-bottom: 20px;
  height: -moz-calc(100% - 120px);
  height: -webkit-calc(100% - 120px);
  height: calc(100% - 120px);
  overflow: auto;
}
.msg_item {
  margin-bottom: 20px;
  position: relative;
}
.msg_item .uface {
  position: absolute;
  bottom: 0px;
}
.msg_item .item_right {
  margin-left: 45px;
  float: left;
  margin-right: 15px;
}
.msg_item .msg {
  background-color: #f4f6f8;
  padding: 10px 15px;
  line-height: 24px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
  color: #2e4059;
  position: relative;
  margin-bottom: 5px;
}
.msg.own {
  background-color: #e0f1fc;
}
/*自己的聊天记录显示为蓝色*/
.msg_item .msg:before {
  content: "";
  position: absolute;
  bottom: -12px;
  left: 10px;
  border-width: 12px 12px 0 0;
  border-style: solid;
  border-color: #f4f6f8 transparent;
  display: block;
  width: 0;
}
.msg_item .msg.own:before {
  border-color: #e0f1fc transparent;
}
.msg_item .name_time {
  font-size: 12px;
  color: #7e90a5;
  line-height: 30px;
  padding-left: 10px;
}
.write_box {
  height: 100px;
  overflow: hidden;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  overflow: hidden;
}
.write_area {
  border: 2px solid #e3e8ed;
  border-bottom: none;
  padding: 5px;
  outline: none;
  color: #b4c0ce;
  margin: 0;
  vertical-align: bottom;
  width: -moz-calc(100% - 14px);
  width: -webkit-calc(100% - 14px);
  width: calc(100% - 14px);
  height: 56px;
}
.facebox {
  height: 32px;
  width: 100%;
  background-color: #e3e8ed;
}
.sub_but {
  float: right;
  padding: 0 25px;
  background-color: #7e90a5;
  outline: none;
  border: none;
  height: 32px;
  cursor: pointer;
  line-height: 30px;
  color: #fff;
}
/*chat_right*/
.chat_right {
  width: 199px;
  height: 100%;
  float: left;
  border-left: 1px solid #eee;
}
.user_list {
  padding: 0;
  overflow: auto;
  height: 100%;
}
.user_list li {
  padding: 10px 20px;
  color: #2e4059;
  cursor: pointer;
}
.user_list li:hover,
.user_list li.selected {
  background-color: #f4f6f8;
}
.user_list li span {
  display: block;
  float: left;
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
.user_list li em {
  display: block;
  float: left;
  height: 30px;
  line-height: 30px;
}
.user_list li small {
  width: 10px;
  height: 10px;
  margin: 10px;
  float: left;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
small.online {
  background-color: #57b869;
}
small.offline {
  background-color: #eb3e3e;
}
.user_list li img {
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  vertical-align: middle;
}
/*expression - 表情,有待增加*/
.expression {
  float: left;
}
/*chat_type - 聊天性质,私聊|群聊*/
.chat_type {
  float: left;
  line-height: 30px;
  padding-left: 10px;
}
</style>