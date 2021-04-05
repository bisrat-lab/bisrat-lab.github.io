
//1-------------------------------------------------------
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  let user = {
    name: 'John',
    loginOk() {
      console.log(`${this.name} logged in`);
    },
    loginFail() {
      console.log(`${this.name} failed to log in`);
    },
  };
  askPassword(user.loginOk, user.loginFail);
  askPassword(user.loginFail.bind(user),user.loginFail.bind(user))
  
  //2-------------------------------------------------------
  
  function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  let user = {
    name: 'John',
    login(result) {
      console.log(this.name + (result ? 'logged in' : 'failed to log'))
    }
  };
  
  
  askPassword(() => user.login(true), () => user.login(false));
  askPassword(user.login.bind(user, true), user.login.bind(user, false));
  
  //3--------------------------------------------------------
  let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
      this.students.forEach(function (student) {
        console.log(this.title + ": " + student);
      }.bind(this));
    }
  };
  group.showList();