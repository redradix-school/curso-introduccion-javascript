(function () {

  var Factory = Solipsist.Factory;

  var UserFactory = Factory({
    nombre: Factory.string_sequence('Usuario Genérico :n'),
    nacimiento: Factory.int_between(1900, 2000),
    posts: Factory.int_between(0, 100),
    id: Factory.int_sequence(),
    username: Factory.string_random(10)
  });

  var _users = {};

  var id;
  for (var i=0; i<10; i++) {
    id = i + (Math.floor(Math.random() * 10) - 5);
    id = Math.max(id, 0);
    _users[id] = UserFactory({id: id});
  }

  var Request = Solipsist.Request;

  Request.get('/users/:id', {delay: 300}, function (req) {
    var id = req.params['id'];
    var user = _users[id];
    if (user) {
      req.success(user);
    } else {
      req.error();
    }
  });

  Request.post('/users/:id', {delay: 300}, function (req) {
    var id = req.params['id'];
    var user = req.data;
    _users[id] = user;
    req.success(id);
  });

  Request.get('/users', {delay: 700}, function (req) {
    var results = [];
    for (var id in _users) {
      results.push({nombre: _users[id].nombre, id: id});
    }
    req.success(results);
  });

}());
