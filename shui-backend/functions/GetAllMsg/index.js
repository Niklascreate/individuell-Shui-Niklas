const { sendResponse, sendError } = require('../../responses/index');
const { db } = require('../../services/index');

exports.handler = async (event) => {
    try {
        
        const result = await db.scan({
            TableName: 'shui-backendDB'
        });

        
        return sendResponse(200, result.Items);

    } catch (error) {
        return sendError(500, { message: error.message });
    }
};