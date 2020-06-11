import { PlayerInfo } from '@byted-creative/tiago/dist/interface';

/**
 * 游戏相关数据
 *
 * @class GameModel
 */
class GameModel{

  twoPlayersInfo!: PlayerInfo;
  
  environment: any = "";
}
export const gameModel = new GameModel();