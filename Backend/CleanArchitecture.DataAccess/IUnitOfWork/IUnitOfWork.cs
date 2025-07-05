using CleanArchitecture.DataAccess.IRepository;
using CleanArchitecture.DataAccess.Models;
using CleanArchitecture.DataAccess.Repository;


namespace CleanArchitecture.DataAccess.IUnitOfWorks
{
    public interface IUnitOfWork : IDisposable
    {
        //Repository<T> Repository<T>() where T : ModelBase;

        Task<bool> Save();


        IApplicationUserRepository ApplicationUserRepository { get; }
        ICityRepository CityRepository { get; }
    }
}
