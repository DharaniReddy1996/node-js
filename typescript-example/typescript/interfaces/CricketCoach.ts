import {Coach} from './Coach';
import { FortuneServices } from './FortuneServices';

export class CricketCoach implements Coach,FortuneServices{
    getDailyFortune(): string {
        return "today is good day"
    }
    getDailyWorkOut(){
        return "practice cricket"
    }
}