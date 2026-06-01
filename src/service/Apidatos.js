import api from "../api/conectarAxios";
class DatosDB{

    async getDatos(){
        return await api.get('/comida/buscar')
    }

    async postDatos(data){
        return await api.post('/comida/create',data)
    }
async deleteDatos(id){
    return await api.delete(`/comida/delete/${id}`)
}

async updateDatos(id,data){
    return await api.put(`/comida/update/${id}`,data)
}
}

export default new DatosDB();