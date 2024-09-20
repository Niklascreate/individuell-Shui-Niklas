const { db } = require('../../services/index');
const { sendResponse, sendError } = require('../../responses/index');

exports.handler = async (event) => {
    try {
        const postid = event.pathParameters.id;
        const data = JSON.parse(event.body);

        if (!data.alias && !data.inlagg) {
            return sendError(400, { message: 'Ange Alias och inlägg tack.' });
        }

        const findInlagg = await db.get({
            TableName: 'shui-backendDB',
            Key: { id: postid }
        });

        
        if (!findInlagg.Item) {
            return sendError(404, { message: 'Inlägget finns inte.' });
        }

        const updateExpressions = [];
        const expressionAttributeValues = {};

        if (data.alias) {
            updateExpressions.push('alias = :alias');
            expressionAttributeValues[':alias'] = data.alias;
        }
        if (data.inlagg) {
            updateExpressions.push('inlagg = :inlagg');
            expressionAttributeValues[':inlagg'] = data.inlagg;
        }

        await db.update({
            TableName: 'shui-backendDB',
            Key: { id: postid },
            UpdateExpression: `SET ${updateExpressions.join(', ')}`,
            ExpressionAttributeValues: expressionAttributeValues
        });

        return sendResponse(200, { message: 'Ditt inlägg uppdaterats.' });

    } catch (error) {
        return sendError(500, { message: error.message });
    }
};