#!/bin/bash
folder=./src/api/${1^}
mkdir -p $folder
index=$folder/index.ts
service=$folder/$1Service.ts
controller=$folder/$1Controller.ts
model=$folder/$1Model.ts
router=$folder/$1Router.ts
validation=$folder/$1Validation.ts

if [ -f "$index" ]; then
    echo "$index exist"
else
    cat >$index <<EOF
export {${1}Router} from "./${1}Router" 
EOF
fi

if [ -f "$service" ]; then
    echo "$service exist"
else
    cat >$service <<EOF
export class ${1^}Service {
   
}
EOF
fi

if [ -f "$controller" ]; then
    echo "$controller exist"
else
    cat >$controller <<EOF
import { BaseController } from "./../baseController";
import { ${1^}Service } from "./${1}Service";

export class ${1^}Controller extends BaseController{
    private ${1}Service = new ${1^}Service();

}
EOF
fi

if [ -f "$model" ]; then
    echo "$model exist"
else
    cat >$model <<EOF
import { Entity, PrimaryGeneratedColumn,  UpdateDateColumn, CreateDateColumn, BaseEntity } from "typeorm";

@Entity()
export class ${1^} extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

     @UpdateDateColumn()
    public updatedAt: Date;

    @CreateDateColumn()
    public createdAt: Date;

}
EOF
fi

if [ -f "$router" ]; then
    echo "$router exist"
else
    cat >$router <<EOF
import express from "express";

const router = express.Router();

export const $1Router = router;
EOF
fi

if [ -f "$validation" ]; then
    echo "$validation exist"
else
    cat >$validation <<EOF
import Joi from "@hapi/joi";

export const ${1}ValidationSchema = Joi.object().keys({
});
EOF
fi

echo "Created $1 component"
