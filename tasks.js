'use strict';

function show() {
  console.log(this);
}

show();

const user = {
  name: 'Тима',
  show: function () {
    console.log(this.name);
  },
};

user.show();

const admin = {
  name: 'Admin',
  show: user.show,
};
admin.show();
