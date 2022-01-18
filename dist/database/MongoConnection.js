"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoConnection = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = (0, tslib_1.__importDefault)(require("mongoose"));
const constants_1 = require("../config/constants");
class MongoConnection {
    async connect() {
        try {
            await mongoose_1.default.connect(constants_1.config.MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });
            console.log('Database connected');
        }
        catch (err) {
            console.error(err.message);
            process.exit(1);
        }
    }
}
exports.MongoConnection = MongoConnection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9uZ29Db25uZWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RhdGFiYXNlL01vbmdvQ29ubmVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEscUVBQStCO0FBQy9CLG1EQUE0QztBQUM1QyxNQUFhLGVBQWU7SUFDcEIsS0FBSyxDQUFDLE9BQU87UUFDbkIsSUFBSTtZQUNILE1BQU0sa0JBQVEsQ0FBQyxPQUFPLENBQUMsa0JBQU0sQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtZQUNwRyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUE7U0FDakM7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQzFCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDZjtJQUNGLENBQUM7Q0FDRDtBQVZELDBDQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2NvbnN0YW50cydcbmV4cG9ydCBjbGFzcyBNb25nb0Nvbm5lY3Rpb24ge1xuXHRwdWJsaWMgYXN5bmMgY29ubmVjdCgpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHR0cnkge1xuXHRcdFx0YXdhaXQgbW9uZ29vc2UuY29ubmVjdChjb25maWcuTU9OR09fQ09OTkVDVElPTiwgeyB1c2VOZXdVcmxQYXJzZXI6IHRydWUsIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSB9KVxuXHRcdFx0Y29uc29sZS5sb2coJ0RhdGFiYXNlIGNvbm5lY3RlZCcpXG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKVxuXHRcdFx0cHJvY2Vzcy5leGl0KDEpXG5cdFx0fVxuXHR9XG59Il19