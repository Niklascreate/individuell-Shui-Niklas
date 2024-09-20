const { sendResponse, sendError } = require('../../responses/index');
const { db } = require('../../services/index');

exports.handler = async (event) => {
    try {
        
        const id = event.pathParameters.id;

        if (!id) {
            return sendError(400, { message: 'Korrekt ID måste anges.' });
        }

        await db.delete({
            TableName: 'shui-backendDB',
            Key: { id: id }
        });

        return sendResponse(200, { message: 'Inlägg raderat.' });

    } catch (error) {
        return sendError(500, { message: error.message });
    }
};