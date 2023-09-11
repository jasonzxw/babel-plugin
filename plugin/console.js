module.exports = (babel) => {
    const { types: t } = babel;
    return {
        visitor: {
            NumericLiteral(path) {
                path.node.value = 2;
            },
            VariableDeclarator(path){
                console.log(path)
                path.node.kind = 'const'
            }
        }
    }
}