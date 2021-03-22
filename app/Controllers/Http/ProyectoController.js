'use strict'

const Proyecto = use('App/Models/Proyecto');

class ProyectoController {
    async index ({ auth: auth }) {
        const user = await auth.getUser();
        return await user.proyectos().fetch();
    }

    async create({ auth, request }){
        const user = await auth.getUser();
        const { name } = request.all();
        const project = new Proyecto();
        // project.nombre = nombre;
        project.fill({ name });
        await user.proyectos().save(project);
        return project;
    }
}

module.exports = ProyectoController
