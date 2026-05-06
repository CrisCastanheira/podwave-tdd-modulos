import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';
import flash from 'connect-flash';
import expressLayouts from 'express-ejs-layouts';
import healthRoutes from './routes/health.routes.js';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import podcastRoutes from './routes/podcast.routes.js';
import episodeRoutes from './routes/episode.routes.js';
import categoryRoutes from './routes/category.routes.js';
import favoriteRoutes from './routes/favorite.routes.js';
import progressRoutes from './routes/progress.routes.js';
import reviewRoutes from './routes/review.routes.js';
import adminRoutes from './routes/admin.routes.js';

const app = express();

app.set('views', path.join(process.cwd(), 'src/views/pages'));
app.set('layout', path.join(process.cwd(), 'src/views/layouts/main'));
app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(process.cwd(), 'src/public')));

app.use(session({
  secret: process.env.SESSION_SECRET || 'podwave-secret-dev',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 24 }
}));

app.use(flash());
app.use((req, res, next) => {
  res.locals.messages = req.flash();
  res.locals.user = req.session.user || null;
  res.locals.title = 'PodWave';
  next();
});

app.get('/', (req, res) => res.render('index', { title: 'PodWave - Streaming de Podcasts' }));
app.use('/health', healthRoutes);
app.use(authRoutes);
app.use(userRoutes);
app.use(podcastRoutes);
app.use(episodeRoutes);
app.use(categoryRoutes);
app.use(favoriteRoutes);
app.use(progressRoutes);
app.use(reviewRoutes);
app.use(adminRoutes);

app.use((req, res) => res.status(404).render('error', { title: 'Página não encontrada' }));

export default app;
