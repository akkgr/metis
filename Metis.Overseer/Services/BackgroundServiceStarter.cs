
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Hosting;

namespace Metis.Overseer.Services
{
    public class BackgroundServiceStarter : IHostedService
    {
        readonly GuardService backgroundService;

        public BackgroundServiceStarter(GuardService backgroundService)
        {
            this.backgroundService = backgroundService;
        }

        public Task StartAsync(CancellationToken cancellationToken)
        {
            return backgroundService.StartAsync(cancellationToken);
        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            return backgroundService.StopAsync(cancellationToken);
        }
    }
}