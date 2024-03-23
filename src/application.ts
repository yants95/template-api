export abstract class Application {
  public async start(): Promise<void> {
    await this.setupAppConfigs();
    await this.initializeApp();
  }

  private async setupAppConfigs(): Promise<void> {
    await this.setupApplicationConfig();
  }

  protected abstract setupApplicationConfig(): Promise<void>;

  protected abstract initializeApp(): Promise<void>;
}
