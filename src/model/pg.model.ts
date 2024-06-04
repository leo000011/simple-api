import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../intances/pg'


export interface PhraseInstance extends Model {
    id: number,
    author: string,
    frases: string
}

const Phrase = sequelize.define<PhraseInstance>('Phrase',
    {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        author: {
            type: DataTypes.STRING
        },
        frases: {
            type: DataTypes.STRING
        }
    }, {
    tableName: 'frases',
    timestamps: false
}
)

export default Phrase