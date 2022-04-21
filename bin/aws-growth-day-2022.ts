#!/usr/bin/env node
import "source-map-support/register";
import { App } from "aws-cdk-lib";
import { AwsGrowthDay2022Stack } from "../lib/aws-growth-day-2022-stack";

const app = new App();
new AwsGrowthDay2022Stack(app, "AwsGrowthDay2022Stack", {});
