
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

//CRUD 
Route.group(()=>{
  Route.get('/','CrudEmployeesController.getEmployeeAll'),
  Route.get('/:id','CrudEmployeesController.getEmployeeInfo')
  Route.post('/','CrudEmployeesController.createEmployee')
  Route.put('/:id','CrudEmployeesController.updateEmployee')
  Route.delete('/:id','CrudEmployeesController.deleteEmployee')

}).prefix('employee').where('id', Route.matchers.number())


