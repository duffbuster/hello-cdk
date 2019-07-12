#!/usr/bin/env node
import 'source-map-support/register';

import core = require('@aws-cdk/core');

import { HelloCdkStack } from '../lib/hello-cdk-stack';

const app = new core.App();
new HelloCdkStack(app, 'HelloCdkStack');
