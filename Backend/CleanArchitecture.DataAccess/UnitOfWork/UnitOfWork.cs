using CleanArchitecture.DataAccess.Contexts;
using CleanArchitecture.DataAccess.IRepository;
using CleanArchitecture.DataAccess.Models;
using System.Collections;
using CleanArchitecture.DataAccess.Repository;
using CleanArchitecture.DataAccess.IUnitOfWorks;

namespace CleanArchitecture.DataAccess.UnitOfWorks
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationDbContext _dbcontext;
      
        public IApplicationUserRepository ApplicationUserRepository { get; private set; }
        public ICityRepository CityRepository { get; private set; }

        private Hashtable _repsitories;
        public UnitOfWork(ApplicationDbContext dbcontext)
        {
            this._dbcontext = dbcontext;
            _repsitories = new Hashtable();
            ApplicationUserRepository = new ApplicationUserRepository(_dbcontext);
            CityRepository = new CityRepository(_dbcontext);
        }
        //public Repository<T> Repository<T>() where T : class
        //{
        //    var Key = typeof(T).Name;
        //    if (!_repsitories.ContainsKey(Key))
        //    {
        //        var repo = new Repository<T>(_dbcontext);
        //        _repsitories.Add(Key, repo);
        //    }
        //    return _repsitories[Key] as Repository<T>;
        //}



        public async Task<bool> Save()
        {
            return await _dbcontext.SaveChangesAsync() > 0;
        }

        public void Dispose()
        {
            _dbcontext.Dispose();
        }


    }
}
