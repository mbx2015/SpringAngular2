package com.mbx.dao;

import com.mbx.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


/**
 * Created by MBX on 10/14/2016.
 */
@Transactional
@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    User findUserByLogin(String login);
}
