const { Model, DataTypes } = require('sequelize');

class Episode extends Model {
    
    static init(sequelize){
        
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            title: DataTypes.TEXT,
            description: DataTypes.TEXT,
            pub_date: DataTypes.DATE,
            image: DataTypes.TEXT,
            audio_url: DataTypes.TEXT,
            type_audio: DataTypes.STRING,
            length_audio: DataTypes.INTEGER,
            podcast_id: {
                allowNull: false,
                type: DataTypes.INTEGER
            },
            keywords: DataTypes.TEXT,
        },{
            sequelize,
            underscored: true,
            tableName: 'Episodes'
        })
        
    }
    
}

module.exports = Episode;