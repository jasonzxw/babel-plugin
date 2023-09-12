/*
 * @author: jason_zuo
 * @LastEditors: jason_zuo
 * @LastEditTime: 2023-09-12 10:54:05
 * @FilePath: \babel-plugin\plugin\console.js
 */
module.exports = (babel) => {
    const { types: t } = babel;
    return {
        visitor: {
            NumericLiteral(path) {
                path.node.value = 2;
            },
            VariableDeclarator(path){
                path.node.kind = 'const'
            },
            Identifier(path){
                if(path.parent.type === 'VariableDeclarator'){
                    path.node.name = 'b'
                }
            }
        }
    }
}