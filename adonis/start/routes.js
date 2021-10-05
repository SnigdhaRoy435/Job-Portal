'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

const Helpers = use('Helpers');

Route.group(() => {
  Route.get('/', 'ApiController.getCities');
}).prefix('api/v1');
/*Route.group(() => {
  Route.get('/', 'AuthController.register'); 
}).prefix('register');*/
Route.post('/login', 'AuthController.login')
//Route.post('/login', 'AuthController.auth');

Route.get('/register', 'AuthController.register');
Route.post('/register', 'AuthController.store'); // to store the users table fields

Route.get('/postjob', 'JobController.postJob');
Route.post('/postjob', 'JobController.drop');

Route.get('/apply', 'ApplyController.view');
Route.post('/apply', 'ApplyController.store');
Route.get('/jobs', 'JobController.display')

Route.get('/postjob/:id', 'JobController.view');
Route.get('/jobs/:id', 'JobController.show');
Route.get('/apply/:id', 'ApplyController.show');
Route.get('/applyjob/:id', 'ApplyController.display');
Route.get('/register/:id', 'AuthController.show');
Route.get('/appUser/:id', 'ApplyController.userId');
Route.get('/job/:title?', 'JobController.slug');




Route.any('*', ({ response }) => {
  response.download(Helpers.publicPath('react/app.html'));
});
