import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Employee from 'App/Models/Employee'
import EmployeeValidator from 'App/Validators/EmployeeValidator'

export default class CrudEmployeesController {
    //POST
    public async createEmployee({ request }: HttpContextContract) {
        const payLoad = await request.validate(EmployeeValidator)
        return await Employee.create(payLoad)
    }
    //GET 
    public async getEmployeeInfo({ params, response }: HttpContextContract) {
        if (params.id) {
            return await Employee.find(params.id)
        }
        else
            response.send("Id not found")
    }
    public async getEmployeeAll({ }: HttpContextContract) {
        const payLoad = await Employee.all()
        // console.log(payLoad);
        return payLoad
    }
    // UPDATE
    public async updateEmployee({ request, params }: HttpContextContract) {
        const empDetail = await request.validate(EmployeeValidator)
        console.log("valData", empDetail);

        const empId: any = await Employee.find(params.id)

        if (!empId) {
            return "Id Not Found to update"
        }
        // empId.name=empDetail.name,
        const updatedData = empId.merge(empDetail)
        console.log("updt", updatedData);
        const payLoad = await updatedData.save()
        return payLoad
    }
    public async deleteEmployee({ params }: HttpContextContract) {
        const deleteId = await Employee.find(params.id)
        console.log(deleteId);

        if (!deleteId) {
            return "Id not found"
        }
        deleteId.delete()
        return "Deleted Successfully"
    }

}
