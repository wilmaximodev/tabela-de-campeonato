import { Model, QueryInterface, DataTypes } from 'sequelize';
import ITeam from '../../interfaces/teams/ITeam';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<ITeam>>('teams', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
        teamName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'team_name'
          },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('teams');
  },
};