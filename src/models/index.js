import { User } from './User.js';
import { Podcast } from './Podcast.js';
import { Episode } from './Episode.js';
import { Favorite } from './Favorite.js';
import { Progress } from './Progress.js';
import { Review } from './Review.js';

Podcast.hasMany(Episode, { foreignKey: 'podcast_id', as: 'episodes' });
Episode.belongsTo(Podcast, { foreignKey: 'podcast_id', as: 'podcast' });

User.belongsToMany(Episode, { through: Favorite, foreignKey: 'user_id', otherKey: 'episode_id', as: 'favoriteEpisodes' });
Episode.belongsToMany(User, { through: Favorite, foreignKey: 'episode_id', otherKey: 'user_id', as: 'favoritedBy' });

User.hasMany(Progress, { foreignKey: 'user_id', as: 'progressItems' });
Progress.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
Episode.hasMany(Progress, { foreignKey: 'episode_id', as: 'progressItems' });
Progress.belongsTo(Episode, { foreignKey: 'episode_id', as: 'episode' });

User.hasMany(Review, { foreignKey: 'user_id', as: 'reviews' });
Review.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
Episode.hasMany(Review, { foreignKey: 'episode_id', as: 'reviews' });
Review.belongsTo(Episode, { foreignKey: 'episode_id', as: 'episode' });

export { User, Podcast, Episode, Favorite, Progress, Review };
