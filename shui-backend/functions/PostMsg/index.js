const { db } = require('../../services/index');
const { sendResponse, sendError } = require('../../responses/index');
const { v4: uuid } = require('uuid');
const moment = require('moment');

exports.handler = async (event) => {
    try {
        const data = JSON.parse(event.body);

        if (!data.alias || !data.inlagg) {
            return sendError(400, { message: 'Alias och inlägg måste anges.' });
        }

        const id = uuid().substring(0, 8);
        
        const veckodag = moment().format('dddd');
        const datum = moment().format('D MMMM');
        const tid = moment().format('HH:mm');
        const createdAt = moment().toISOString();

        await db.put({
            TableName: 'shui-backendDB',
            Item: {
                id: id,
                veckodag: veckodag,
                datum: datum,
                tid: tid,
                inlagg: data.inlagg,
                alias: data.alias,
                createdAt: createdAt
            }
        });

        const confirmation = {
            id: id,
            veckodag: veckodag,
            datum: datum,
            tid: tid,
            inlagg: data.inlagg,
            alias: data.alias,
            createdAt: createdAt
        };

        return sendResponse(200, { confirmation });

    } catch (error) {
        return sendError(500, { message: error.message });
    }
};