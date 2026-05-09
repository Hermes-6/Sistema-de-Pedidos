import api from "../api/conectarAxios";
class DatosDB{

    async getDatos(){
        return await api.get('/comida/buscar')
    }

    async postDatos(data){
        return await api.post('/comida/create',data)
    }

}

export default new DatosDB();