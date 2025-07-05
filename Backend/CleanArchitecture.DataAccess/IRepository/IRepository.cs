using CleanArchitecture.DataAccess.Models;
using System.Linq.Expressions;


namespace CleanArchitecture.DataAccess.IRepository
{
    public interface IRepository<T> where T : class
    {
        Task<IEnumerable<T>> GetAll(Expression<Func<T, bool>>? filter = null, string? includeProperties = null);

        Task<IQueryable<T>> GetAllQuery(Expression<Func<T, bool>>? filter = null, string? includeProperties = null);
        Task<T> Get(Expression<Func<T, bool>> filter, string? includeProperties = null, bool tracked = false);
        Task Add(T entity);
        Task Delete(T entity);
        Task DeleteRange(IEnumerable<T> entities);
        Task Update(T entity);
    }
}
