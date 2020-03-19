const { Model, DataTypes } = require('sequelize');

class Podcast extends Model {
    
    static init(sequelize){
        
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            feed_url: DataTypes.STRING,
            number_of_items: DataTypes.INTEGER,
            name: DataTypes.STRING,
            language: DataTypes.STRING,
            description: DataTypes.STRING,
            author: DataTypes.STRING,
            image: DataTypes.STRING
        },{
            sequelize,
            underscored: true,
            tableName: 'Podcasts'
        })
        
    }
    
}

module.exports = Podcast;