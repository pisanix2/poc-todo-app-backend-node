const model = (sequelize, DataTypes) => {
  const _model = sequelize.define('Todo',{
      title: DataTypes.STRING
    }, { tableName: 'todo' }
  )
  return _model
}

module.exports = model