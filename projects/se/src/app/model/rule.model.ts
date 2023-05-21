/**
 * Copyright (c) 2023 Banco de Bogota. All Rights Reserved.
 * <p>
 * airbus-expert was developed by Core Banking - Gerencia de Desarrollo.
 * <p>
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * proprietary and confidential. For use this code you need to contact to
 * Banco de Bogotá and request exclusive use permission.
 * <p>
 * This file was write by Jose Buelvas <jbuelva@bancodebogota.com.co>.
 */
export interface RuleModel {
  id: string;
  rule: string;
  options: OptionModel[];
}

export interface OptionModel {
  id: number;
  description: string;
  rule_id: string;
  next_rule: {
    rule_id: string;
    option_id: number;
  };
  hash_problem: {
    option_id: number;
    problem_id: string;
    problem: ProblemModel;
  };
}

export interface ProblemModel {
  id: string;
  description: string;
  urgency_level: number;
  solution: SolutionModel;
}

export interface SolutionModel {
  id: number;
  description: string;
  efficacy: number;
  problem_id: string;
  has_solution: string | null;
}
