import angular from 'angular';
import {ChatService} from './chat.service';

let servicesModule = angular.module('services', [])

  .factory('ChatService', ChatService)

  .name;

export default servicesModule;
