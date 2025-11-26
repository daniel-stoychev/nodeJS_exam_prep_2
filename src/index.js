import express from 'express';
import mongoose from 'mongoose';
import handlebars from 'express-handlebars'
import routs from '../routes.js';
import cookieParser from 'cookie-parser';
import authMiddleware from './middlewares/authMiddleware.js';


const app = express();

try {
    await mongoose.connect('mongodb://localhost:27017/', { dbName: 'nodeJS_exam_prep_sept2025_2' });
    console.log('DB connected successfully!');
} catch (error) {
    console.error(error.message)
}

// Setup Handlebars
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true
    }
}));

app.set('view engine', 'hbs');
app.set('views', 'src/views');

// Setup static files
app.use(express.static('src/public'));

//middlewares
app.use(express.urlencoded());
app.use(cookieParser());
app.use(authMiddleware);





// Setup routes
app.use(routs);



app.listen(3030, () => console.log('Server is listening on http://localhost:3030...'));
