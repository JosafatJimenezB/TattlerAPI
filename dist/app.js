"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const restaurantRoutes_1 = __importDefault(require("./routes/restaurantRoutes"));
const commentRoutes_1 = __importDefault(require("./routes/commentRoutes"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_config_1 = require("./config/swagger.config");
const swaggerSpec = (0, swagger_jsdoc_1.default)(swagger_config_1.swaggerOptions);
const app = (0, express_1.default)();
const PORT = parseInt(process.env.PORT || '3000');
app.use(express_1.default.json());
(0, db_1.default)();
app.use((0, cors_1.default)());
app.use('/api', restaurantRoutes_1.default);
app.use('/api', commentRoutes_1.default);
app.get('/ping', (_req, res) => {
    return res.send('pong 🏓');
});
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=app.js.map