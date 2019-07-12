import awsS3 = require('@aws-cdk/aws-s3');
import core = require('@aws-cdk/core');

export class HelloCdkStack extends core.Stack {
  constructor(scope: core.Construct, id: string, props?: core.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new awsS3.Bucket(this, 'MyFirstBucket', {
      versioned: true,
      encryption: awsS3.BucketEncryption.KMS_MANAGED
    });
  }
}
