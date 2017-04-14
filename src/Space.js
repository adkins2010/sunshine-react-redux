class Space {
    constructor (id, name, memory_quotamb, disk_quotamb) {
        this.id = id
        this.name = name
        this.memory_quotamb = memory_quotamb
        this.disk_quotamb = disk_quotamb
        this.apps =[];
    }
}

export default Space