import awsEc2 = require('@aws-cdk/aws-ec2');
import awsEcs = require('@aws-cdk/aws-ecs');
import awsEcsPatterns = require('@aws-cdk/aws-ecs-patterns');
import core = require('@aws-cdk/core');

export class HelloCdkStack extends core.Stack {
  constructor(scope: core.Construct, id: string, props?: core.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const vpc = new awsEc2.Vpc(this, 'MyVpc', { maxAzs: 1 });

    const cluster = new awsEcs.Cluster(this, 'MyCluster', { vpc });

    cluster.addCapacity('DefaultAutoScalingGroupCapacity', {
      instanceType: new awsEc2.InstanceType('t2.micro')
    });

    new awsEcsPatterns.LoadBalancedFargateService(this, 'MyFargateService', {
      cluster,
      cpu: 512,
      desiredCount: 1,
      image: awsEcs.ContainerImage.fromAsset('docker'),
      memoryLimitMiB: 512,
      publicLoadBalancer: true
    });
  }
}
